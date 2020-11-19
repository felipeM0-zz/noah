import React, { useState } from "react";

import Login from "./Login";
import Create from "./Create";

import imgLogo from "../../images/logo.png";

import { Container } from "./styles";

const Outside = () => {
  const [showCreate, setShowCreate] = useState(false);

  return (
    <Container>
      <div>
        <div>
          <img src={imgLogo} alt="Logo" />
          <span>noah</span>
        </div>

        {showCreate ? (
          <Create
            setShowCreate={(v: React.SetStateAction<boolean>) => setShowCreate(v)}
          />
        ) : (
          <Login setShowCreate={(v: React.SetStateAction<boolean>) => setShowCreate(v)} />
        )}
      </div>
    </Container>
  );
};

export default Outside;
