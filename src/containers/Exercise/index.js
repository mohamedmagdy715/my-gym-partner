import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Dialog from "@mui/material/Dialog";

import messages from "../../assets/locales";
import Button from "../../components/Button";
import Card from "../../components/Card";
import AddMuscleDialog from "./AddMuscleDialog";
import { ROUTES_PATHS } from "../../utils/RoutesPaths";

const Exercise = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const { locale } = useSelector((state) => state.locale);
  const cards = [1, 2];

  const { exerciseId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {}, [page]);

  return (
    <main>
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography
            variant="h3"
            align="center"
            color="text.secondary"
            paragraph
          >
            exercise{exerciseId}
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              outlined
              type={"button"}
              onClick={() => {
                setOpen(true);
              }}
              label={`+${messages[locale]["exercise"]["addMuscle"]}`}
            />
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                img={`https://picsum.photos/200/300?random=${card}`}
                imgAlt={"muscle"}
                heading={`Muscle${card}`}
                desc={
                  <>
                    <Typography variant="body1">description</Typography>
                    <Typography variant="body2">
                      {messages[locale]["exercise"]["lastPlayed"]}: 10/10/2022
                    </Typography>
                  </>
                }
                onViewClick={() => {
                  navigate(
                    ROUTES_PATHS.muscle
                      .replace(":exerciseId", exerciseId)
                      .replace(":muscleId", card)
                  );
                }}
                onEditClick={() => {
                  setOpen(true);
                }}
                onDelClick={() => {
                  console.log("delete");
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ display: "flex", justifyContent: "center", mb: 5 }}>
        <Pagination
          count={10}
          page={page}
          onChange={(e, page) => {
            setPage(page);
          }}
          color="primary"
        />
      </Container>
      <Dialog
        open={open}
        onClose={(e, reason) => {
          reason !== "backdropClick" && setOpen(false);
        }}
      >
        <AddMuscleDialog setOpen={setOpen} />
      </Dialog>
    </main>
  );
};

export default Exercise;
