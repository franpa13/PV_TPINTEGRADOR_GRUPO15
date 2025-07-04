import {
  Paper,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Rating,
  Divider,
  Typography,
} from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import StarIcon from "@mui/icons-material/Star";

const FilterBar = ({
  category,
  setCategory,
  rating,
  setRating,
  categories = [],
}) => {
  return (
    <Paper
      elevation={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        overflow: "hidden",
        borderRadius: 1,
        width: "100%",
        maxWidth: 600,
        mx: "auto",
        mb: 4,
      }}
    >
      {/* —— Select de Categoría —— */}
      <FormControl sx={{ flex: 1 }}>
        <InputLabel>Categoría</InputLabel>
        <Select
          value={category}
          label="Categoría"
          onChange={(e) => setCategory(e.target.value)}
          displayEmpty
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiSelect-select": {
              py: 1.5,
              textAlign: "center",
              display: "flex",
              alignItems: "center",
              gap: 1,
              fontWeight: 500,
            },
          }}
          renderValue={() => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <FilterAltIcon fontSize="small" />
              <span>{category === "all" ? "Todas" : category}</span>
            </Box>
          )}
        >
          {categories.map((c) => (
            <MenuItem key={c} value={c}>
              {c === "all" ? "Todas" : c}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Divider orientation="vertical" flexItem />

      {/* —— Rating mínimo —— */}
      <Box
        sx={{
          flex: 1,
          py: 1.5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.5,
        }}
      >
        <Typography fontSize={14} fontWeight={500}>
          Min. rating
        </Typography>
        <Rating
          value={rating}
          onChange={(_, newValue) => setRating(newValue)}
          max={5}
          precision={0.5}
          sx={{ "& .MuiSvgIcon-root": { fontSize: "1.4rem" } }}
          icon={<StarIcon fontSize="inherit" htmlColor="#DF1074" />}
          emptyIcon={<StarIcon fontSize="inherit" />}
        />
      </Box>
    </Paper>
  );
};

export default FilterBar;
