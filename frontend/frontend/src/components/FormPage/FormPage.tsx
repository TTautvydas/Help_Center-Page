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

const FormPage: React.FC = (): JSX.Element => {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = async (data: FormData) => {
    try {
      const response = await axios.post(requestEndpoint, data);
      console.log(response.data);

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
};

export default FormPage;
