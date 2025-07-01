import { NextResponse } from "next/server";

export async function GET() {
  try {
    console.log("Cronjob 실행됨:", new Date().toISOString());

    // 외부 API 호출
    await callExternalAPI();

    return NextResponse.json({
      success: true,
      message: "Cronjob이 성공적으로 실행되었습니다.",
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Cronjob 실행 중 오류 발생:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Cronjob 실행 중 오류가 발생했습니다.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}

async function callExternalAPI() {
  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_CLIENT_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw new Error("Supabase 환경변수가 설정되지 않았습니다.");
    }

    const apiUrl = `${supabaseUrl}/rest/v1/cron_check`;

    console.log("Supabase API 호출 시작:", apiUrl);

    // 먼저 테이블 구조를 확인하기 위해 GET 요청 시도
    console.log("테이블 구조 확인 중...");
    const getResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
      },
    });

    console.log("GET 요청 상태:", getResponse.status);
    if (getResponse.ok) {
      const tableData = await getResponse.json();
      console.log("테이블 데이터:", tableData);
    }

    // POST 요청
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        created_at: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      // 에러 응답 본문을 읽어서 더 자세한 정보 얻기
      let errorMessage = `Supabase API 호출 실패: ${response.status} ${response.statusText}`;

      try {
        const errorData = await response.text();
        if (errorData) {
          errorMessage += `\n에러 상세: ${errorData}`;
        }
      } catch {
        // 에러 응답을 읽을 수 없는 경우 무시
      }

      throw new Error(errorMessage);
    }

    console.log("Supabase API 호출 완료");
    console.log("응답 상태:", response.status);

    // return=minimal이므로 응답 본문은 비어있음 (정상)
    console.log("POST 요청 성공 - 새 레코드가 생성되었습니다");
  } catch (error) {
    console.error("Supabase API 호출 중 오류:", error);
    throw error;
  }
}
