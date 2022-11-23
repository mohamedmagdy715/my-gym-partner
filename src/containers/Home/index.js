import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import messages from "../../assets/locales";
import Button from "../../components/Button";
import Card from "../../components/Card";

const Home = () => {
  const { locale } = useSelector((state) => state.locale);
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            {messages[locale]["home"]["header"]}
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            {messages[locale]["home"]["intro"]}
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
                console.log("modal");
              }}
              label={messages[locale]["home"]["addExercise"]}
            />
          </Stack>
        </Container>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="md">
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card
                img={"https://source.unsplash.com/random"}
                imgAlt={"exercise"}
                heading={`Heading${card}`}
                desc={
                  "This is a media card. You can use this section to describe the content."
                }
                onViewClick={() => {
                  console.log("view");
                }}
                onEditClick={() => {
                  console.log("edit");
                }}
                onDelClick={() => {
                  console.log("delete");
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </main>
  );
};

export default Home;
