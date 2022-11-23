import { useSelector } from "react-redux";
import MaterialCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import Button from "../Button";
import messages from "../../assets/locales";

export default function Card({
  img,
  imgAlt,
  heading,
  desc,
  onViewClick,
  onEditClick,
  onDelClick,
}) {
  const { locale } = useSelector((state) => state.locale);
  return (
    <MaterialCard
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          // pt: "56.25%",
          pt: "20%",
        }}
        image={img}
        alt={imgAlt}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {heading}
        </Typography>
        <Typography>{desc}</Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          label={messages[locale]["general"]["view"]}
          onClick={onViewClick}
        />
        <Button
          size="small"
          label={messages[locale]["general"]["edit"]}
          onClick={onEditClick}
        />
        <Button
          size="small"
          color={"error"}
          label={messages[locale]["general"]["delete"]}
          onClick={onDelClick}
        />
      </CardActions>
    </MaterialCard>
  );
}
