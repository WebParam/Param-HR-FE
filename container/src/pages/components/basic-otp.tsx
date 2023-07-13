import { useOtpInput } from "react-otp-input-hook";
import React, { useEffect, useState } from 'react';

export const BasicOTPComponent = ({ onChange }: { onChange: (val: string) => void }) => {
  const { register } = useOtpInput({
    onInputValueChange: onChange,
  });

  const defaultOptions = { required: true };

  return (
    <div>
      <input className="otp-button  "
         {...register("digit-1", defaultOptions)} />
      <input className=" otp-button   "

      {...register("digit-2", defaultOptions)} />
      <input className=" otp-button  "{...register("digit-3", defaultOptions)} />
      <input className=" otp-button  "{...register("digit-4", defaultOptions)} />
      <input className=" otp-button  "{...register("digit-5", defaultOptions)} />
    </div>
  );
};