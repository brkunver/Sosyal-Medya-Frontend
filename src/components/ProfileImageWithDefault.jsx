import React from 'react'
import defaultPicture from "../assets/profile.png"

export default function ProfileImageWithDefault(props) {

    let imageSource = defaultPicture;
    const {image}=props

    if (image) {
      imageSource = "images/"+image;
    }

  return (
    <img alt={'profile'} src={imageSource} {...props}></img>
  )
}
