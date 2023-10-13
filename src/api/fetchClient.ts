import { getAccessTokenFromLocalStorage } from '../utils/accessTokenHandler'

export const fetchClient = async (url: string, options: RequestInit): Promise<Response> => {
  const accessToken = getAccessTokenFromLocalStorage() //로컬에 저장된 토큰 
  const newOptions = {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${ accessToken }`
    }
  }
  return fetch(url, newOptions)
}
// url은 요청을 보낼 서버의 주소를 나타냅니다.
// options는 요청에 대한 설정을 담고 있는 객체입니다.
// 함수는 다음 단계로 작동합니다:

// getAccessTokenFromLocalStorage(): 이 함수는 로컬 스토리지에서 사용자의 액세스 토큰을 가져옵니다. 액세스 토큰은 일반적으로 사용자를 인증하거나 보안 요청을 수행하기 위한 특별한 문자열입니다.

// newOptions 객체를 만듭니다: 이 객체는 기존 options 객체의 복사본입니다. 그러나 추가로 "Authorization" 헤더를 포함합니다. 이 헤더는 액세스 토큰을 함께 보내기 위해 사용됩니다. 액세스 토큰은 "Bearer" 스타일의 헤더로 전송됩니다.

// fetch(url, newOptions): fetch 함수를 사용하여 HTTP 요청을 보냅니다. 요청은 url에 지정된 서버 주소로 보내지며, 요청 설정은 newOptions에서 가져옵니다.

// 함수는 요청을 보내고 서버에서의 응답을 나타내는 Response 객체를 반환합니다. 이 응답 객체를 사용하여 서버에서 받은 데이터 또는 상태 코드 등을 처리할 수 있습니다.