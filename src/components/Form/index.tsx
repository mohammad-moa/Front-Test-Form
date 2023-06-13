import { useState, useEffect } from "react";

import {
  Box,
  Button,
  MenuItem,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import InputForm from "../Common/Input";
import SelectForm from "../Common/Select";
import Image from "../Common/Image";

import Provinces from "../../../db/provinces.json";
import Cities from "../../../db/cities.json";
import arrowLeft from "../../assets/images/arrow-left-icon.svg";
import { ICities, IInputInfo, ISelectInfo } from "../../types";

const Form: React.FC = () => {
  const [inputInfo, setInputInfo] = useState<IInputInfo>({
    email: {
      value: "",
      isError: false,
    },
    zipCode: {
      value: "",
      isError: false,
    },
  });

  const [selectInfo, setSelectInfo] = useState<ISelectInfo>({
    provinces: "",
    cities: "",
  });

  const [isRequired, setIsRequired] = useState<boolean>(false);

  const [citiesCurrent, setCitiesCurrent] = useState<ICities[]>([]);

  const [countCorrectValue, setCountCorrectValue] = useState<number>(0);

  let getProvinceID: number | null = null;

  const changeInputHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (e.target.name === "email") {
      setInputInfo({
        ...inputInfo,
        email: {
          ...inputInfo.email,
          value: e.target.value,
          isError: /[a-zA-Z]/g.test(e.target.value) ? false : true,
        },
      });
    } else {
      setInputInfo({
        ...inputInfo,
        zipCode: {
          ...inputInfo,
          value: e.target.value,
          isError: /\d{10}/g.test(e.target.value) ? false : true,
        },
      });
    }
  };

  const changeSelectHandler = (e: SelectChangeEvent, type: string) => {
    if (type === "provinces") {
      setSelectInfo({
        ...selectInfo,
        provinces: e.target.value,
      });
    } else {
      setSelectInfo({
        ...selectInfo,
        cities: e.target.value,
      });
    }
  };

  useEffect(() => {
    if (selectInfo.provinces !== "") {
      Provinces.map((val) => {
        if (selectInfo.provinces === val.name) {
          getProvinceID = val.id;
        }
      });
    }
    // Get Current Cities
    let getCities = Cities.filter((val) => {
      if (val.province_id === getProvinceID) {
        return val.name;
      }
    });
    setCitiesCurrent(getCities);
  }, [selectInfo.provinces]);

  const submitHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (
      inputInfo.email.value === "" ||
      inputInfo.zipCode.value === "" ||
      selectInfo.provinces === "" ||
      selectInfo.cities === ""
    ) {
      setIsRequired(true);
    } else {
      setIsRequired(false);
    }
  };

  useEffect(() => {
    let allValue = [
      inputInfo.email.value && !inputInfo.email.isError
        ? inputInfo.email.value
        : "",
      inputInfo.zipCode.value && !inputInfo.zipCode.isError
        ? inputInfo.zipCode.value
        : "",
      selectInfo.provinces,
      selectInfo.cities,
    ];

    setCountCorrectValue(allValue.filter((val) => val !== "").length);
  }, [
    inputInfo.email.value,
    inputInfo.zipCode.value,
    selectInfo.provinces,
    selectInfo.cities,
  ]);

  return (
    <Box px={2}>
      <InputForm
        type="email"
        label="ایمیل"
        name="email"
        placeHolder="آدرس ایمیلت رو اینجا بنویس"
        errorText="از حروف انگلیسی استفاده کن"
        isError={inputInfo.email.isError}
        value={inputInfo.email.value ?? ""}
        onChange={changeInputHandler}
      />
      <SelectForm
        label="استان"
        value={selectInfo.provinces}
        onChange={(e) => changeSelectHandler(e, "provinces")}
      >
        <MenuItem value="آدرس استانت رو انتخاب کن" disabled>
          آدرس استانت رو انتخاب کن
        </MenuItem>
        {Provinces.length > 0
          ? Provinces.map((val) => (
              <MenuItem key={val.id} value={val.name}>
                {val.name}
              </MenuItem>
            ))
          : ""}
      </SelectForm>
      <SelectForm
        label="شهر"
        value={selectInfo.cities}
        onChange={(e) => changeSelectHandler(e, "cities")}
      >
        <MenuItem value="آدرس شهرت رو انتخاب کن" disabled>
          آدرس شهرت رو انتخاب کن
        </MenuItem>
        {citiesCurrent.length > 0
          ? citiesCurrent.map((val) => (
              <MenuItem key={val.id} value={val.name}>
                {val.name}
              </MenuItem>
            ))
          : ""}
      </SelectForm>
      <InputForm
        type="number"
        label="کدپستی"
        name="zipCode"
        placeHolder="کدپستی خونه رو بنویس"
        errorText="کد پستی باید ده رقمی باشه (به این شکل 00000-00000)"
        isError={inputInfo.zipCode.isError}
        value={inputInfo.zipCode.value || ""}
        onChange={changeInputHandler}
      />

      {isRequired ? (
        <Typography sx={{ mt: 4, textAlign: "center", color: red["500"] }}>
          پر کردن فرم ها الزامیه
        </Typography>
      ) : (
        ""
      )}

      <Box
        sx={{
          position: "relative",
          p: "12px",
          m: "30px 0",
          backgroundImage: `conic-gradient(#4CB59F ${
            countCorrectValue * 90
          }deg,#ebebeb 0deg)`,
          borderRadius: 7,
        }}
      >
        <Button
          fullWidth
          sx={{
            bgcolor: "#80E8D0",
            borderRadius: 4,
            boxShadow: "0 0 0px 7px #ffffff",
            p: "8px",
            ":hover": { bgcolor: "#80E8D0" },
          }}
          onClick={submitHandler}
        >
          <Image src={arrowLeft} alt="arrow-left-icon" width="30px" />
        </Button>
      </Box>
    </Box>
  );
};

export default Form;
