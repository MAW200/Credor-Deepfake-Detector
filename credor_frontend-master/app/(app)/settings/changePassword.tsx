import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Alert,
  SafeAreaView,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useSession } from "@/hooks/context";

const { width } = Dimensions.get("window");

export default function ChangePasswordScreen() {
  const { session } = useSession();
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleBackPress = () => {
    router.back();
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSave = () => {
    if (!currentPassword.trim()) {
      Alert.alert("Error", "Please enter your current password.");
      return;
    }

    if (!newPassword.trim()) {
      Alert.alert("Error", "Please enter a new password.");
      return;
    }

    if (!validatePassword(newPassword)) {
      Alert.alert("Error", "Password must be minimum 8 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      Alert.alert("Error", "New password and confirm password do not match.");
      return;
    }
    
    Alert.alert(
      "Success", 
      "Password updated successfully!",
      [
        {
          text: "OK",
          onPress: () => {
            router.back();
          },
        },
      ]
    );
  };

  return (
    <LinearGradient
      colors={["#000000", "#C3A455"]}
      start={{ x: 0.5, y: 0.4 }}
      end={{ x: -0.76, y: -0.54 }}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <SafeAreaView>
          {/* Header */}
          <View style={styles.header}>
            <TouchableOpacity onPress={handleBackPress} style={styles.backButton}>
              <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={styles.titleContainer}>
              <Text style={styles.title}>Change Password</Text>
            </View>
          </View>

          {/* Description */}
          <Text style={styles.description}>
            This changes the password used for authentication for the user.
          </Text>

          {/* Current Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Current Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                value={currentPassword}
                onChangeText={setCurrentPassword}
                placeholder="Enter current password"
                placeholderTextColor="#878787"
                secureTextEntry={!showCurrentPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                onPress={() => setShowCurrentPassword(!showCurrentPassword)}
                style={styles.eyeButton}
              >
                <Ionicons
                  name={showCurrentPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#878787"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
          </View>

          {/* New Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>New Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                value={newPassword}
                onChangeText={setNewPassword}
                placeholder="Enter new password"
                placeholderTextColor="#878787"
                secureTextEntry={!showNewPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                onPress={() => setShowNewPassword(!showNewPassword)}
                style={styles.eyeButton}
              >
                <Ionicons
                  name={showNewPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#878787"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
          </View>

          {/* Confirm Password Input */}
          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Confirm Password</Text>
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                placeholder="Confirm new password"
                placeholderTextColor="#878787"
                secureTextEntry={!showConfirmPassword}
                autoCapitalize="none"
                autoCorrect={false}
              />
              <TouchableOpacity
                onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                style={styles.eyeButton}
              >
                <Ionicons
                  name={showConfirmPassword ? "eye-off" : "eye"}
                  size={20}
                  color="#878787"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.divider} />
          </View>

          {/* Password Requirements Note */}
          <View style={styles.requirementsContainer}>
            <Ionicons name="information-circle" size={13} color="#EFBD3D" />
            <Text style={styles.requirementsText}>
              Password must be minimum 8 characters long
            </Text>
          </View>

          {/* Save Button */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
              <Text style={styles.saveButtonText}>Save</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Math.min(38, width * 0.1),
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 20,
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontFamily: "DMSans-Bold",
    fontSize: 32,
    fontWeight: "700",
    color: "#F5F5F5",
    lineHeight: 42,
  },
  description: {
    fontFamily: "DMSans-Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#F5F5F5",
    lineHeight: 18,
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 30,
  },
  inputLabel: {
    fontFamily: "DMSans-Bold",
    fontSize: 16,
    fontWeight: "700",
    color: "#F5F5F5",
    lineHeight: 21,
    marginBottom: 10,
  },
  passwordInputContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  passwordInput: {
    flex: 1,
    backgroundColor: "transparent",
    fontSize: 16,
    color: "#F5F5F5",
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  eyeButton: {
    padding: 5,
  },
  divider: {
    height: 1,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
  },
  requirementsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 40,
  },
  requirementsText: {
    fontFamily: "DMSans-Regular",
    fontSize: 14,
    fontWeight: "400",
    color: "#F5F5F5",
    lineHeight: 18,
    marginLeft: 8,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 40,
  },
  saveButton: {
    width: 212,
    height: 38,
    borderRadius: 10,
    backgroundColor: "#EFBD3D",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#EFBD3D",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 21.4,
    elevation: 5,
  },
  saveButtonText: {
    fontFamily: "DMSans-Bold",
    fontSize: 16,
    fontWeight: "700",
    color: "#1F1F1F",
    lineHeight: 21,
  },
}); 