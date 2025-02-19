import { Button, Divider } from "@mantine/core";
import { IconArrowLeft } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Company from "../CompanyPage/Company";
import SimilarCompanies from "../CompanyPage/SimilarCompanies";

const CompanyPage = () => {
    return (
      <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins'] p-4">
        <Link className="my-4 inline-block" to="/Jobs">
          <Button
            leftSection={<IconArrowLeft size={20} />}
            color="bright-sun.4"
            my="md"
            variant="light"
          >
            Back
          </Button>
        </Link>
        <div className="flex gap-5 justify-between">
          <Company/>
          <SimilarCompanies/>
        </div>
      </div>
    );
  };
  
  export default CompanyPage;
  