import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Toolbar from "@mui/material/Toolbar";
const theme = createTheme();

function CurrentOrders({ currentOrders }) {
  if (currentOrders.length !== 0) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <main>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h4" color="inherit" noWrap>
                Active Orders
              </Typography>
            </Toolbar>
            <Container sx={{ py: 3 }} maxWidth="md">
              <Grid container spacing={2}>
                {currentOrders.map((card) => (
                  <Grid item key={card.id} id={card.id} xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        component="img"
                        image={card.image}
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          {card.name} {card.price}₹
                        </Typography>
                        <Typography gutterBottom variant="subtitle2">
                          {card.description}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">Unlist</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Paper>
        </main>
      </ThemeProvider>
    );
  } else {
    return (
      <Paper
        sx={{
          p: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        No active orders...
      </Paper>
    );
  }
}

export default CurrentOrders;
