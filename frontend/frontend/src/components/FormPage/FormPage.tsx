import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const requestEndpoint = "http://localhost:3001/submit";

interface FormData {
  name: string;
  email: string;
  orderId: string;
  description: string;
}

export default function FormPage() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    console.log(data);

    try {
      await axios.post(requestEndpoint, data);
      console.log(data);

      alert("Request created");
    } catch (error: any) {
      alert("Create failed");
      console.log(error.message);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name")} placeholder="Name" />
        <input {...register("email")} placeholder="Email" />
        <input {...register("orderId")} placeholder="OrderId" />
        <textarea {...register("description")} placeholder="Description" />
        <input type="submit" />
      </form>
    </div>
  );
}
