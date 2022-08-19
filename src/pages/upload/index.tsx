import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import { Button, IconButton, Box, Avatar } from '@mui/material'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
export default function Upload(props: any) {
  const { avatar, setAvatar } = props;
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = async (
    imageList: ImageListType,
    addUpdateIndex: number[] | undefined
  ) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList as never[]);
    // console.log("image:::", imageList);
    // console.log("image-url:::", imageList[0].dataURL);
    setAvatar(imageList[0]);
    console.log("imageInformation:::", imageList[0]);


    await axios({
      method: 'post',
      url: 'http://localhost:8000/app',
      data: imageList[0]
    })
      .then(function (response: any) {
        console.log("responseUpload:::", response);
      })
      .catch(function(err: any) {
        console.log("err:", err);
      })
  };
  
  return (
    <div className="App">
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps
        }) => (
          // write your building UI
          <div className="upload__image-wrapper" 
            style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'center'
              }}
          >
            
            { !images.length &&
              <Box sx={{
                height:'140px', 
                display:'flex',
                justifyContent:'center', 
                alignItems:'center'}}
              >
              <IconButton sx={isDragging ? { color: "red"} : undefined}
                onClick={() => {onImageUpload()}}
                {...dragProps}>
                <AddAPhotoIcon sx={{fontSize:'40px'}}/>
              </IconButton>
              </Box>
            }
           
            {imageList.map((image, index) => (
                <div style={{position:'relative'}}>
                  {/* <img src={image.dataURL} alt="" style={{borderRadius:'50%', width:'150px'}} /> */}
                  <Avatar src={image?.dataURL} sx={{width:'130px', height:'130px'}} />
                  <IconButton 
                    sx={{
                      position:'absolute',
                      bottom:'5px', 
                      right:'10px', 
                      color:'black', 
                      background:'#fb771a'
                    }}  onClick={() => { onImageRemove(0);}}
                  >
                    <DeleteIcon sx={{fontSize:'20px', color:'grey'}} />
                  </IconButton>
                </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
