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
import Toolbar from "@mui/material/Toolbar";
const theme = createTheme();

export default function Product({ products }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
        <Typography variant="h4" color="inherit" noWrap>
          Listed Products
        </Typography>
      </Toolbar>

      <main>
        <Container sx={{ py: 3 }} maxWidth="md">
          <Grid container spacing={2}>
            {products.map((card) => (
              <Grid item key={card.id} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia component="img" image={card.image} alt="random" />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {card.name} {card.price}₹
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      {card.description}
                    </Typography>

                    <Typography gutterBottom variant="subtitle2">
                      Seller : {card.seller}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      Email : {card.email}
                    </Typography>
                    <Typography gutterBottom variant="subtitle2">
                      Mobile No. : {card.mobile}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Buy</Button>
                    <Button size="small">Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
