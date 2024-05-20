import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Skeleton } from "@mui/material";
import useQuestions from "../../hooks/useQuestions";

const Dekstop = () => {
  const { questions, loading } = useQuestions();
  if (!questions && !questions) return <div>No Data</div>;

  return (
    <div className="px-10 md:px-20">
      <p className="font-bold text-[#002157] text-[30px]">FAQ</p>
      <div className="lg:mx-[0px] px-[0px] sm:px-[0px] pt-20">
        {loading ? (
          <div>
            {[...Array(4)].map((_, index) => (
              <div key={index}>
                <div className="relative top-[0px] p-1">
                  <Skeleton variant="rectangular" width={1000} height={10} />
                  <Skeleton variant="rectangular" width={1000} height={10} />
                  <Skeleton variant="rectangular" width={1000} height={10} />
                  <Skeleton variant="rectangular" width={1000} height={10} />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div>
            {questions.map((res, index: number) => (
              <Accordion
                style={{ backgroundColor: "#F8FCFF" }}
                className=" w-full "
                key={index}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{res.attributes.title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{res.attributes.desc}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Dekstop;
