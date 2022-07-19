import {
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Gener } from "../../classes/Gener.enum";
import Song from "../../classes/Song.class";
import BackButton from "../../components/BackButton";
import { editSong } from "../../redux/action";
import { RootState } from "../../redux/store";
import WestIcon from "@mui/icons-material/West";

const EditSong = (props: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let { id } = useParams();
  let songs = props.songs;
  const [newSong, setNewSong] = useState<Song>({
    id: "",
    title: "",
    artist: "",
    length: 0,
    price: 0,
    genre: Gener.CLASSICAL,
  });
  useEffect(() => {
    songs && setNewSong(songs.find((x: Song) => x.id == id));
  }, []);

  const genreArr = ["POP", "ROCK", "CLASSICAL", "RAP"];
  return (
    <>
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
          marginTop: 8,
        }}
      >
        <Typography component="div" variant="h5">
          Edit Song
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={() => {
            dispatch(props.editSong(newSong));
          }}
          sx={{ mt: 3 }}
        >
          <div>
            <TextField
              id="standard-basic"
              label="title"
              type="text"
              variant="standard"
              value={newSong.title}
              onChange={(e) => {
                setNewSong({ ...newSong, title: e.target.value });
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-basic"
              label="artist"
              type="text"
              variant="standard"
              value={newSong.artist}
              onChange={(e) => {
                setNewSong({ ...newSong, artist: e.target.value });
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-number"
              label="length"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              value={newSong.length}
              onChange={(e) => {
                setNewSong({ ...newSong, length: parseInt(e.target.value) });
              }}
            />
          </div>
          <div>
            <TextField
              id="standard-number"
              label="price"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
              value={newSong.price}
              onChange={(e) => {
                setNewSong({ ...newSong, price: parseInt(e.target.value) });
              }}
            />
          </div>
          <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-simple-select-standard-label">
                genre
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                label="Genre"
                onChange={(e: SelectChangeEvent) => {
                  setNewSong({
                    ...newSong,
                    genre: e.target.value as unknown as Gener,
                  });
                }}
              >
                <MenuItem value={1}>POP</MenuItem>
                <MenuItem value={2}>ROCK</MenuItem>
                <MenuItem value={3}>RAP</MenuItem>
                <MenuItem value={4}>CLASSICAL</MenuItem>
              </Select>
            </FormControl>
          </div>
          <Stack spacing={2} alignItems={"center"}>
            <Button variant="contained" type="submit">
              Update
            </Button>
          </Stack>
        </Box>
        <div style={{ marginLeft: 60 }}>
          <Avatar sx={{ alignSelf: "self-start" }}>
            <Button
              endIcon={<WestIcon />}
              onClick={() => {
                navigate("/");
              }}
            ></Button>
          </Avatar>
        </div>
      </Box>
      <button>EditSong</button>
      <BackButton></BackButton>
    </>
  );
};
export default EditSong;
