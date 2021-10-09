import {Form, Formik, FormikHelpers} from "formik";
import {useRouter} from "next/router";
import React from "react";
import toast from "react-hot-toast";
import {
  MeDocument,
  MeQuery,
  useRegisterMutation
} from "../../generated/graphql";
import {toErrorMap} from "../../lib/toErrorMap";
import {Button} from "../Button";
import InputField from "./InputField";

interface RegisterFormProps {}

interface Values {
  username: string;
  displayname: string;
  email: string;
  password: string;
}

export const RegisterForm: React.FC<RegisterFormProps> = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <Formik
      initialValues={{
        username: "",
        displayname: "",
        email: "",
        password: "",
      }}
      onSubmit={async (
        values: Values,
        { setSubmitting, setErrors }: FormikHelpers<Values>
      ) => {
        setSubmitting(true);
        const response = await register({
          variables: {
            data: values,
          },
          update: (cache, { data }) => {
            cache.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                __typename: "Query",
                me: data?.register,
              },
            });
            cache.evict({ fieldName: "posts:{}" });
          },
        })
          .then(() => {
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              router.push("/confirm");
            }
          })
          .catch((e: any) => {
            // if graphql error
            if (e.graphQLErrors[0].extensions.exception.validationErrors)
              setErrors(toErrorMap(e));
            // other error, password: as it is last input box
            else toast.error(e.message);
          });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="w-full container">
          <InputField
            name="username"
            placeholder="username"
            touched={touched.username}
            errors={errors.username}
            type="text"
          />
          <InputField
            name="displayname"
            placeholder="displayname"
            touched={touched.displayname}
            errors={errors.displayname}
            type="text"
          />
          <InputField
            name="email"
            placeholder="email@provider.tdl"
            touched={touched.email}
            errors={errors.email}
            type="email"
          />
          <InputField
            name="password"
            placeholder="password"
            touched={touched.password}
            errors={errors.password}
            type="password"
          />
          <Button type="submit" loading={isSubmitting}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};
