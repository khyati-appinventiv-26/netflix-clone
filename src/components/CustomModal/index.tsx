import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Modal from 'react-native-modal';

type AnimationType = 'fadeIn' | 'slideInUp' | 'slideInDown' | 'zoomIn';

type CustomModalProps = {
  isVisible: boolean;
  onBackdropPress: () => void;
  func1: () => void;
  func2: () => void;
  func3: () => void;
  img1: any; 
  img2: any;
  img3: any; 
  animationType : AnimationType;
  
};

const CustomModal: React.FC<CustomModalProps> = (props) => {
  return (
    <Modal
      isVisible={props.isVisible}
      onBackdropPress={props.onBackdropPress}
      animationIn={props.animationType}
      style={styles.modalStyle}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TouchableOpacity style={styles.sections} onPress={props.func1}>
            <Image source={props.img1} style={styles.img} />
            <Text style={styles.txt}>Manage Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sections} onPress={props.func2}>
            <Image source={props.img2} style={styles.img} />
            <Text style={styles.txt}>Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sections} onPress={props.func3}>
            <Image source={props.img3} style={styles.img} />
            <Text style={styles.txt}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  modalStyle: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContainer: {
    backgroundColor: '#424242',
    alignItems: 'center',
    height: '35%',
    width: '100%',
    borderTopStartRadius: 50,
    borderTopEndRadius: 50,
  },
  modalContent: {
    width: '100%',
    padding: 20,
  },
  sections: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  txt: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  img: {
    height: 25,
    width: 25,
    marginRight: 18,
  },
});
