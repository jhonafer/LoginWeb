import { AuthProvider } from "./auth"

export const AppProviders = ({ children }: any) => {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}
