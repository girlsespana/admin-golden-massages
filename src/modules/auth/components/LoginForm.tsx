import clsx from 'clsx'
import * as Yup from 'yup'
import {Form, Formik} from 'formik'
import {useMutation} from '@apollo/client'
import {FaLock, FaUser} from 'react-icons/fa'
import {useAuth} from '@auth/hooks'
import Alert from '@/components/Alert'
import {Button} from '@components'
import FormField from '@/components/forms/FormField'
import TokenAuthMutation from "@auth/mutations/tokenAuthMutation";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";
import {GraphQLFormattedError} from "graphql";
import GraphqlErrorsRenderer from "@/components/forms/GraphqlErrorsRenderer";

interface Values {
  email: string
  password: string
}

const LoginForm = () => {
  const [graphQLErrors, setGraphQLErrors] = useState<readonly GraphQLFormattedError[] | null>(null)

  const {login} = useAuth()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()

  const [tokenAuth, {loading, error}] = useMutation(TokenAuthMutation, {
      onCompleted: data => {
        const from = searchParams.get('from')
        const authToken = data?.tokenAuth?.token
        const user = data?.tokenAuth?.user

        if (authToken && user?.isStaff) {
          login(authToken)
          navigate(from ? from : '/')
        } else {
          setGraphQLErrors([
            { message: "El usuario con el que intentas ingresar no está autorizado o no está activo" }
          ])
        }
      },
    }
  )

  const initialValues: Values = {
    email: import.meta.env.VITE_EMAIL ?? '',
    password: import.meta.env.VITE_PASSWORD ?? '',
  }

  const validationSchema = Yup.object({
    email: Yup.string().required('Campo requerido!').matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      'Correo electrónico inválido',
    ),
    password: Yup.string().required('Campo requerido!'),
  })

  const onSubmit = async (values: Values) => {
    await tokenAuth({
      variables: {
        email: values.email,
        password: values.password,
      },
    })
  }

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
      <Form className="relative w-full">
        <div className="relative w-full bg-card-dark/95 backdrop-blur-sm rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/50 overflow-hidden">
          {/* Top gold accent line */}
          <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"/>

          <div className="px-8 pt-9 pb-8 flex flex-col items-center gap-5">
            {/* Brand */}
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl font-extrabold tracking-tight uppercase text-white leading-none">
                  <span className="text-velvet-gradient">Lounge</span> Velvet
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-gray-500">
                  Panel admin
                </span>
              </div>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10"/>
              <span className="text-[10px] uppercase tracking-[0.25em] text-gray-600">
                Acceso
              </span>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10"/>
            </div>

            {/* Greeting */}
            <div className="text-center -mt-1">
              <h1 className="text-base font-semibold text-white">
                Bienvenido de nuevo
              </h1>
              <p className="text-xs text-gray-500 mt-1">
                Ingresa tus credenciales para continuar
              </p>
            </div>

            {/* Error alert (animated) */}
            <div
              className={clsx([
                'w-full grid transition-[grid-template-rows] duration-300 ease-in-out',
                error?.message ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
              ])}>
              <div className="overflow-hidden">
                <Alert className="w-full">
                  Valida tus credenciales
                </Alert>
              </div>
            </div>

            <div className="w-full flex flex-col gap-3">
              <FormField
                icon={FaUser}
                name="email"
                label="Usuario"
                className="w-full"
                placeholder="user@gmail.com"/>
              <FormField
                icon={FaLock}
                name="password"
                label="Contraseña"
                type="password"
                className="w-full"
                placeholder="••••••••"/>
            </div>

            <Button
              className="w-full mt-1 py-2.5 font-semibold tracking-wide shadow-lg shadow-primary/20"
              type="submit"
              isLoading={loading}>
              Ingresar
            </Button>

            <GraphqlErrorsRenderer errors={graphQLErrors?.map((e) => e.message) ?? null}/>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default LoginForm
