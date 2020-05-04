import ImagePicker from 'react-native-image-picker';
import url from '../../../config/url';
on_avatar_change = () => {
    ToastAndroid.show("Avatar changed!", ToastAndroid.SHORT);
};

handleChoosePhoto = () => {
    const options = {
        noData: true,
    };
    ImagePicker.showImagePicker(options, (response) => {
        console.log('Response = ', response);
        if (response.didCancel) {
            console.log('User cancelled image picker');
        } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
        } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
        } else {
            const source = { uri: response.uri };
        if (response.uri) {
                this.setState({ image: response });
                this.handleUploadPhoto()
            }
        }
    });

};

createFormData = (photo, body) => {
    const data = new FormData();

    data.append("image", {
        name: photo.fileName,
        type: photo.type,
        uri:Platform.OS === "android" ? photo.uri : photo.uri.replace("file://", "")
    });

    Object.keys(body).forEach(key => {
        data.append(key, body[key]);
    });

    return data;
};

handleUploadPhoto = () => {
    const path = url + '/api/change_avatar';
    fetch(path, {
        method: "POST",
        body: this.createFormData(this.state.image, { username: this.props.route.params.user.username })
        })
    .then(response => response.json())
    .then(response => {
        alert("Upload success!");
    })
    .catch(error => {
        console.log("upload error", error);
        alert("Upload failed!");
    });
};

export default handleChoosePhoto;