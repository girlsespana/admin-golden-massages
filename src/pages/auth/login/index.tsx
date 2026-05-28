import LoginForm from '@/modules/auth/components/LoginForm'

const LoginPage = () => {
  return (
      <div className="m-auto w-full max-w-md px-4 py-10">
        <LoginForm/>
        <p className="mt-8 text-center text-[11px] tracking-wide text-gray-600">
          © {new Date().getFullYear()} Lounge Velvet — Panel de administración
        </p>
      </div>
  )
}

export default LoginPage
