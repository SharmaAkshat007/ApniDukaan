import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import LogoutIcon from "@mui/icons-material/Logout";
import { useHistory } from "react-router";
import Wrapper from "./Wrapper";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import AddIcon from "@mui/icons-material/Add";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const myCards = [
  {
    id: 1,
    name: "Mattress",
    price: 700,
    image:
      "https://cdn.shopify.com/s/files/1/0532/7074/1168/products/Singlepremiummattress.jpg?v=1623668781",
    description:
      "Bring home the single size foam mattress with memory foam top and have a great night's sleep",
    seller: "Akshat Sharma",
    email: "akshat@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
  {
    id: 6,
    name: "Cricket Bat",
    price: 1800,
    image: "https://m.media-amazon.com/images/I/61wbIOMM-fL._SY606_.jpg",
    description:
      "SG SunnTonny Grade 5 English Willow Cricket Bat ( Size: Youth,Leather Ball )",
    seller: "Akshat Sharma",
    email: "akshat@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
];

const myCart = [
  {
    id: 2,
    name: "Pillow",
    price: 500,
    image:
      "https://wakefit-co.s3.ap-south-1.amazonaws.com/img/pillow-covers/navy/1.jpg",
    description:
      "Wakefit 100% Cotton 200 TC Pillow Cover, Standard - 18 x 27 inches, Navy Blue, Set of 2",
    seller: "Rahul Mishra",
    email: "rahul@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
];

const myOrders = [
  {
    id: 2,
    name: "Pillow",
    price: 500,
    image:
      "https://wakefit-co.s3.ap-south-1.amazonaws.com/img/pillow-covers/navy/1.jpg",
    description:
      "Wakefit 100% Cotton 200 TC Pillow Cover, Standard - 18 x 27 inches, Navy Blue, Set of 2",
    seller: "Rahul Mishra",
    email: "rahul@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
];
const cards = [
  {
    id: 1,
    name: "Mattress",
    price: 700,
    image:
      "https://cdn.shopify.com/s/files/1/0532/7074/1168/products/Singlepremiummattress.jpg?v=1623668781",
    description:
      "Bring home the single size foam mattress with memory foam top and have a great night's sleep",
    seller: "Akshat Sharma",
    email: "akshat@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
  {
    id: 2,
    name: "Pillow",
    price: 500,
    image:
      "https://wakefit-co.s3.ap-south-1.amazonaws.com/img/pillow-covers/navy/1.jpg",
    description:
      "Wakefit 100% Cotton 200 TC Pillow Cover, Standard - 18 x 27 inches, Navy Blue, Set of 2",
    seller: "Rahul Mishra",
    email: "rahul@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
  {
    id: 3,
    name: "Bedsheet",
    price: 600,
    image:
      "https://4.imimg.com/data4/GO/KX/ANDROID-14237325/product-500x500.jpeg",
    description: "Coffee, Navy Blue, Maroon, Pink, Seagreen ",
    seller: "Ravnoor Singh",
    email: "ravnoor@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
  {
    id: 4,
    name: "Bedspread",
    price: 1000,
    image:
      "https://cdn.shopify.com/s/files/1/0519/7470/1251/products/1-19_460x.jpg?v=1634551018",
    description:
      "Grey Velvet Herringbone Bedspread, Fabric - Velvet,  Dry Clean Only",
    seller: "Rounak taneja",
    email: "rounak@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
  {
    id: 5,
    name: "Badminton Racquet",
    price: 1500,
    image: "https://m.media-amazon.com/images/I/71UtKTJvMQL._SY679_.jpg",
    description:
      "YONEX GR 303 Strung Badminton Racquet (Half Cover) [G3 , 95-99.9 grams]",
    seller: "Aditya Sharma",
    email: "aditya@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
  {
    id: 6,
    name: "Cricket Bat",
    price: 1800,
    image: "https://m.media-amazon.com/images/I/61wbIOMM-fL._SY606_.jpg",
    description:
      "SG SunnTonny Grade 5 English Willow Cricket Bat ( Size: Youth,Leather Ball )",
    seller: "Akshat Sharma",
    email: "akshat@gmail.com",
    mobile: "xxxxx-xxxxx",
  },
];

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit">Apni Dukaan</Link> {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const [view, setView] = React.useState(0);
  const [products, setProducts] = React.useState(cards);
  const [myProducts, setMyProducts] = React.useState(myCards);
  const [orders, setOrders] = React.useState(myOrders);
  const [cart, setCart] = React.useState(myCart);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Apni Dukaan
            </Typography>
            <IconButton
              color="inherit"
              onClick={() => {
                history.push("signin");
              }}
            >
              <LogoutIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>
            <div>
              <ListItem
                button
                onClick={() => {
                  setView(0);
                }}
              >
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Apni Dukaan" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setView(1);
                }}
              >
                <ListItemIcon>
                  <ShoppingCartIcon />
                </ListItemIcon>
                <ListItemText primary="Cart" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setView(2);
                }}
              >
                <ListItemIcon>
                  <ShoppingBagIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" />
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={() => {
                  setView(3);
                }}
              >
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Add Product" />
              </ListItem>
              <ListItem
                button
                onClick={() => {
                  setView(4);
                }}
              >
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary="My Products" />
              </ListItem>
            </div>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Wrapper
              orders={orders}
              setOrders={setOrders}
              myProducts={myProducts}
              setMyProducts={setMyProducts}
              view={view}
              setView={setView}
              products={products}
              setProducts={setProducts}
              cart={cart}
              setCart={setCart}
            />

            <Box
              sx={{
                p: 6,
              }}
              component="footer"
            >
              <Copyright />
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
