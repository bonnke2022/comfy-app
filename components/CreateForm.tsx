"use client";
import { createInputSchema, CreateInputType } from "@/utils/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "./ui/form";
import FormInput from "./FormInput";
import { Button } from "./ui/button";
import Link from "next/link";

const CreateForm = () => {
  const form = useForm<CreateInputType>({
    resolver: zodResolver(createInputSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });
  function onSubmit(values: CreateInputType) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold text-primary">
          Register
        </h4>
        <FormInput
          type="text"
          label="username"
          name="username"
          defaultValue=""
          control={form.control}
        />
        <FormInput
          type="email"
          label="email"
          name="email"
          defaultValue=""
          control={form.control}
        />
        <FormInput
          type="password"
          label="password"
          name="password"
          defaultValue=""
          control={form.control}
        />
        <div className="mt-4">
          <Button
            type="submit"
            className="btn btn-primary btn-block capitalize"
          >
            register
          </Button>
        </div>
        <p className="text-center text-primary">
          Already a member?
          <Link
            href="/login"
            className="ml-2 link link-hover link-primary capitalize"
          >
            login
          </Link>
        </p>
      </form>
    </Form>
  );
};

export default CreateForm;
