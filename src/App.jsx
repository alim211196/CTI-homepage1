import React from "react";
import { Box } from "@mui/material";
import { Suspense } from "react";
import RouteIndex from "./route";
import SuspenseLoader from "./components/suspenseLoader";

function App() {
  return (
    <>
      <Suspense
        fallback={
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              position: "fixed", // 🔥 Ensure full-screen absolute control
              top: 0,
              left: 0,
              width: "100vw", // Full screen width
              height: "100vh", // Full screen height
              bgcolor: "white",
              zIndex: 1300, // Above everything (like MUI modals)
            }}
          >
            <SuspenseLoader />
          </Box>
        }
      >
        <RouteIndex />
      </Suspense>
    </>
  );
}

export default App;
