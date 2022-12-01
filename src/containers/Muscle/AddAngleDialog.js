import { useSelector } from "react-redux";
import { useFormik } from "formik";
import Box from "@mui/material/Box";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import Input from "../../components/Input";
import Button from "../../components/Button";
import messages from "../../assets/locales";

const AddAngleDialog = ({ setOpen }) => {
  const { locale } = useSelector((state) => state.locale);

  const { values, setFieldValue, handleSubmit, dirty } = useFormik({
    initialValues: {
      exerciseName: "",
      description: "",
      image: "",
      todayWeights: "",
    },
    onSubmit: ({ exerciseName, description, image, todayWeights }) => {
      console.log({
        exerciseName,
        description,
        image,
        todayWeights,
      });
      setOpen(false);
    },
  });

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <DialogTitle>{messages[locale]["exercise"]["addMuscle"]}</DialogTitle>
      <DialogContent>
        <Input
          fullWidth
          id={"exerciseName"}
          label={messages[locale]["form"]["name"]}
          name={"exerciseName"}
          type={"text"}
          onChange={(value) => {
            setFieldValue("exerciseName", value);
          }}
          sxWrapper={{ my: 1 }}
          value={values["exerciseName"]}
        />
        <Input
          fullWidth
          id={"description"}
          label={messages[locale]["form"]["description"]}
          name={"description"}
          type={"text"}
          onChange={(value) => {
            setFieldValue("description", value);
          }}
          value={values["description"]}
          sxWrapper={{ my: 1 }}
        />
        {messages[locale]["form"]["image"]}
        <Input
          fullWidth
          id={"image"}
          name={"image"}
          type={"file"}
          onChange={(value) => {
            setFieldValue("image", value);
          }}
          value={values["image"]}
          sxWrapper={{ my: 1 }}
        />
        <Input
          fullWidth
          id={"todayWeights"}
          label={messages[locale]["muscle"]["todayWeights"]}
          name={"todayWeights"}
          type={"text"}
          onChange={(value) => {
            setFieldValue("todayWeights", value);
          }}
          value={values["todayWeights"]}
          sxWrapper={{ my: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          outlined
          type={"button"}
          label={messages[locale]["general"]["cancel"]}
          onClick={() => {
            setOpen(false);
          }}
        />
        <Button
          type={"submit"}
          disabled={!dirty}
          label={messages[locale]["general"]["submit"]}
        />
      </DialogActions>
    </Box>
  );
};

export default AddAngleDialog;
