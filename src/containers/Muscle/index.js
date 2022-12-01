import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Pagination from "@mui/material/Pagination";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

import messages from "../../assets/locales";
import Button from "../../components/Button";
import Card from "../../components/Card";
import AddAngleDialog from "./AddAngleDialog";

const Muscle = () => {
  const [page, setPage] = useState(1);
  const [open, setOpen] = useState(false);
  const [openView, setOpenView] = useState(false);
  const { locale } = useSelector((state) => state.locale);
  const cards = [1, 2];

  const { muscleId } = useParams();

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
            muscle{muscleId}
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
              label={`+${messages[locale]["muscle"]["addAngle"]}`}
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
                imgAlt={"angle"}
                heading={`Angle${card}`}
                desc={
                  <>
                    <Typography variant="body1">description</Typography>
                    <Typography variant="body2">
                      {messages[locale]["muscle"]["lastPlayed"]}: 10/10/2022
                    </Typography>
                    <Typography variant="body2">
                      {messages[locale]["muscle"]["lastTimeWeights"]}: 12*15,
                      14*15, 16*15, 18*12
                    </Typography>
                  </>
                }
                onViewClick={() => {
                  setOpenView(true);
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
        <AddAngleDialog setOpen={setOpen} />
      </Dialog>
      <Dialog
        open={openView}
        onClose={(e, reason) => {
          setOpenView(false);
        }}
      >
        <DialogTitle>angle1</DialogTitle>
        <DialogContent>
          <Container>
            <Grid container>
              <Grid item xs={3}>
                {messages[locale]["form"]["description"]}:
              </Grid>
              <Grid item xs={9}>
                descccc
              </Grid>
              <Grid item xs={3}>
                {messages[locale]["muscle"]["lastPlayed"]}:
              </Grid>
              <Grid item xs={9}>
                10/10/2022
              </Grid>
              <Grid item xs={12}>
                {messages[locale]["muscle"]["weights"]}:
              </Grid>
              <Grid item xs={3}>
                10/11/2022
              </Grid>
              <Grid item xs={9}>
                12*15, 14*15, 16*15, 18*12
              </Grid>
              <Grid item xs={3}>
                15/11/2022
              </Grid>
              <Grid item xs={9}>
                12*15, 14*15, 16*15, 18*12
              </Grid>
              <Grid item xs={3}>
                20/11/2022
              </Grid>
              <Grid item xs={9}>
                12*15, 14*15, 16*15, 18*12
              </Grid>
            </Grid>
          </Container>
        </DialogContent>
      </Dialog>
    </main>
  );
};

export default Muscle;
