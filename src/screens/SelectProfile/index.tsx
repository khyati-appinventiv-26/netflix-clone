import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, Modal, TextInput, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addProfile, editProfile, deleteProfile, selectProfile } from '../../reduxPersist/profileSlice';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Icons } from '../../assets';
import styles from './style';

// TypeScript types
interface Profile {
  id: string;
  name: string;
}

interface ReduxState {
  profiles: {
    profiles: Profile[];
  };
}

interface RouteParams {
  params: string;
}

const ProfileScreen: React.FC = ({navigation , route}: any) => {
  const profiles = useSelector((state: ReduxState) => state.profiles.profiles);
  const dispatch = useDispatch();
  
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [inputName, setInputName] = useState<string>('');
  const [editingProfile, setEditingProfile] = useState<Profile | null>(null);

  
  
  const params = (route.params as RouteParams)?.params;

  const handleAddProfile = () => {
    if (inputName.trim()) {
      dispatch(
        addProfile({
          id: Date.now().toString(),
          name: inputName,
        })
      );
      setInputName('');
      setModalVisible(false);
    }
  };

  const handleEditProfile = () => {
    if (inputName.trim() && editingProfile) {
      dispatch(editProfile({ id: editingProfile.id, name: inputName }));
      setInputName('');
      setEditingProfile(null);
      setModalVisible(false);
    }
  };

  const openEditProfile = (profile: Profile) => {
    setEditingProfile(profile);
    setInputName(profile.name);
    setModalVisible(true);
  };

  const handlePress = (profileName: string, profileId: string) => {
    dispatch(selectProfile({ id: profileId, name: profileName }));

    if (params === 'profile-screen') {
      navigation.navigate('bottom', { screen: 'Profile' });
    } else {
      navigation.navigate('bottom');
    }
  };

  const handleAddBtn = () => {
   
      setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <View style={styles.view1}>
        <Text style={styles.title}>Who's Watching?</Text>
      </View>
      
      <FlatList
        data={profiles}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.profileCard} onPress={() => handlePress(item.name, item.id)}>
            <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' }} style={styles.avatar} />
            <Text style={styles.profileName}>{item.name}</Text>
            <TouchableOpacity style={styles.editButton} onPress={() => openEditProfile(item)}>
              <Image source={Icons.pencil} />
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
      
      <TouchableOpacity style={styles.addProfileButton} onPress={handleAddBtn} disabled={profiles.length >= 4}>
        <Text style={profiles.length >= 4 ? [styles.addProfileText ,{color: 'grey'}] :styles.addProfileText }>+ Add Profile</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.view}>
            <Text style={styles.modalTitle}>
              {editingProfile ? 'Edit Profile' : 'Add Profile'}
            </Text>
          </View>
          
          <Image
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' }} // Replace with actual image
            style={styles.profileImage}
          />
          
          <TextInput
            style={styles.input}
            placeholder="Enter profile name"
            value={inputName}
            onChangeText={(value) => setInputName(value)}
            placeholderTextColor={'white'}
          />
          
          <TouchableOpacity style={styles.addButton} onPress={editingProfile ? handleEditProfile : handleAddProfile}>
            <Text style={styles.addTxt}>{editingProfile ? 'Save Changes' : 'Add Profile'}</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(false)}>
            <Text style={styles.addTxt}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default ProfileScreen;
