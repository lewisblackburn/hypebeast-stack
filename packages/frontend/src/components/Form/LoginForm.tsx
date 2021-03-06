import {Form, Formik, FormikHelpers} from "formik";
import {useRouter} from "next/router";
import React from "react";
import toast from "react-hot-toast";
import {MeDocument, MeQuery, useLoginMutation} from "../../generated/graphql";
import {toErrorMap} from "../../lib/toErrorMap";
import {Button} from "../Button";
import InputField from "./InputField";

interface LoginFormProps {}

interface Values {
  email: string;
  password: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={async (
        values: Values,
        { setSubmitting, setErrors }: FormikHelpers<Values>
      ) => {
        setSubmitting(true);
        const response = await login({
          variables: {
            data: values,
          },
          update: (cache, { data }) => {
            cache.writeQuery<MeQuery>({
              query: MeDocument,
              data: {
                __typename: "Query",
                me: data?.login,
              },
            });
            cache.evict({ fieldName: "posts:{}" });
          },
        })
          .then(() => {
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              router.push("/");
            }
          })
          .catch((e: any) => {
            // if graphql validation error
            if (e.graphQLErrors[0].extensions.exception.validationErrors)
              setErrors(toErrorMap(e));
            // else toast other errors
            else toast.error(e.message);
          });
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, errors, touched }) => (
        <Form className="w-full container">
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
            Login
          </Button>
        </Form>
      )}
    </Formik>
  );
};
