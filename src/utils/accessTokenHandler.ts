export const saveAccessTokenToLocalStorage = (accessToken: string) => {
  localStorage.setItem('accessToken', accessToken)
}
//로컬에 토큰 저장
export const getAccessTokenFromLocalStorage = (): string => {
  return localStorage.getItem('accessToken') || ''
}
//로컬에 저장된 토큰 가져오는 함수