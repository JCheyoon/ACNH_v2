import {
  Box,
  CircularProgress,
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material";

const LoadingCircular = (props: CircularProgressProps) => {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: "var(--primary-main)",
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: "var(--primary-dark)",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
};

export default LoadingCircular;
