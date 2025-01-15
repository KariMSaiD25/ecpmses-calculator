import { Paper, Typography, IconButton, Box } from "@mui/material";
import "./home.css";
import { Close } from "@mui/icons-material";
//import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { useEffect, useState } from "react";
function Home() {
  // @ts-ignore
  const { items, setItems } = useOutletContext();
   const [data, setData] = useState([]);

  const total = data.reduce(
    (sum, item) => sum + parseFloat(item.price || 0),
    0
  );
  useEffect(() => {
    const controller = new AbortController();
    
  
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3100/mydata", {
          signal: controller.signal,
        });
        const result = await response.json();
        setData(result);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error fetching data:", error);
        }
      }
    };
  
    fetchData();
  
    // Cleanup function
    return () => {
      controller.abort(); // Abort the fetch if the component unmounts
    };
  }, []);

  

  function handleDelete(url,/**title */) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },

    )
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Failed to delete: ${response.status} ${response.statusText}`
            );
          }
          return response.json(); // Parse response if it includes JSON
        })
        .then((data) => {
          console.log("Object deleted successfully:", data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });

  //  setItems((data) => data.filter((data1) => data1.title !== title));
  }

  return (
    <Box component="ul">
      {data?.map((item = {}) => (
        <Paper
          component="li"
          elevation={8}
          key={item.title}
          sx={{
            position: "relative",
            width: "366px",
            display: "flex",
            justifyContent: "space-between",
            mt: "22px",
            pt: "27px",
            pb: "7px",
          }}
        >
          <Typography variant="h6" sx={{ ml: 3, fontSize: "1.3em" }}>
            {item.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 500,
              fontSize: "1.4em",
              opacity: ".8",
              mr: "35px",
            }}
          >
            ${item.price}
          </Typography>
          <IconButton
            sx={{ position: "absolute", top: "0", right: "0" }}
            onClick={() => handleDelete(item.title)}
          >
            {/* `//localhost:3100/mydata/${data.id}`     */}
            <Close sx={{ fontSize: "20px" }} />
          </IconButton>
        </Paper>
      ))}
      <Typography
        sx={{ textAlign: "center", mt: 5 }}
        variant="h5"
        color="inherit"
      >
        👉You spent <strong>${total}</strong>
      </Typography>
    </Box>
  );
}

export default Home;
