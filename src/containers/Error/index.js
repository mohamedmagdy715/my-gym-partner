import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import messages from "../../assets/locales";

const Error = () => {
  const { locale } = useSelector((state) => state.locale);

  return (
    <Typography color={"error"} variant="h1" textAlign={"center"}>
      {messages[locale]["general"]["notFound"]}
    </Typography>
  );
};

export default Error;
