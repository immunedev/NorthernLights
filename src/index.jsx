import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
        <div>
            <Header />
            <Lead />
            <SearchBar />
            <ContentContainer onTripSelect={handleTripSelect} />
        </div>
    ),
  },
  {
    path: "trip",
    element: (
        <div>
            <Header />
            <TripPage
              tripData={selectedTrip}
              onBackClick={handleBackToContent}
              onShowFinalPage={handleShowFinalPage}
            />
        </div>)
  },
  {
    path: "final",
    element: 
        <FinalPage 
            tripData={selectedTrip}
            onBackClick={handleBackToContent} 
        />
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);