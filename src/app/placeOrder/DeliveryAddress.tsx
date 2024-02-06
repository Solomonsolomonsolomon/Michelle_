"use client";

import styles from "./DeliveryAddress.module.css";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "../component/Button";

interface FormValues {
  streetAddress: string;
  houseNumber: string;
  floorNumber: string;
  additionalInformation: string;
}

const DeliveryAddress = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) =>
    console.log(data);

  return (
    <div className={styles.deliveryAddress}>
      <div className={styles.title}>Delivery Address</div>
      <div className={styles.addressContainer}>
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
              <div className={styles.inputContainer}>
                <input
                  className={styles.option1}
                  id="streetAddress"
                  placeholder="Street/Estate Address"
                  type="text"
                  {...register("streetAddress", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.streetAddress && (
                  <span>{errors.streetAddress.message}</span>
                )}
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.option1}
                  id="houseNumber"
                  placeholder="House Number"
                  type="text"
                  {...register("houseNumber", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.houseNumber && (
                  <span>{errors.houseNumber.message}</span>
                )}
              </div>
              <div className={styles.inputContainer}>
                <input
                  className={styles.option1}
                  id="floorNumber"
                  placeholder="Floor Number"
                  type="text"
                  {...register("floorNumber", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.floorNumber && (
                  <span>{errors.floorNumber.message}</span>
                )}
              </div>
              <div className={styles.textAreaContainer}>
                <label htmlFor="info">Additional Information</label>
                <textarea
                  className={styles.textArea}
                  id="info" 
                  cols={30}
                  rows={5}
                  {...register("additionalInformation", {
                    required: true,
                    maxLength: 20,
                  })}
                ></textarea>
              </div>
              <div>
                <Button type="submit" width={150}>Save</Button>
              </div>
            </div>
          </form>
        </div>
        <div className={styles.mapContainer}>
          <img className={styles.map} src="./map.png" alt="Location on map" />
        </div>
      </div>
    </div>
  );
};

export default DeliveryAddress;
