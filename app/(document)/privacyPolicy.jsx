import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons } from "../../constants";
import { router } from "expo-router";
import HeaderBar from "../../components/HeaderBar";

const PrivacyPolicy = () => {
  return (
    <SafeAreaView className="px-4 bg-white">
      <HeaderBar title="Privacy Policy"></HeaderBar>
      <ScrollView>
        <Text className="text-xl font-psemibold pb-4">Our Policy</Text>
        <Text className="text-gray-500 pb-8">
          At QuickMart, we are committed to protecting the privacy and security
          of our users' personal information. This Privacy Policy outlines how
          we collect, use, disclose, and safeguard the information obtained
          through our e-commerce app. By using QuickMart, you consent to the
          practices described in this policy.
          {"\n"}
          <Text className="text-black-100 leading-7">
            1. Information Collection:
          </Text>
          {"\n"}- Personal Information: We may collect personal information such
          as name, address, email, and phone number when you create an account,
          make a purchase, or interact with our services. {"\n"}- Transaction
          Details: We collect information related to your purchases, including
          order history, payment method, and shipping details. {"\n"}- Usage
          Data: We may collect data on how you interact with our app, such as
          browsing activity, search queries, and preferences.
          {"\n"}
          <Text className="text-black-100 leading-7">2. Information Use:</Text>
          {"\n"}- Provide Services: We use the collected information to process
          orders, deliver products, and provide customer support. {"\n"}-
          Personalization: We may use your information to personalize your
          shopping experience, recommend products, and display targeted
          advertisements. {"\n"}- Communication: We may use your contact
          information to send important updates, promotional offers, and
          newsletters. You can opt-out of these communications at any time.
          {"\n"}
          <Text className="text-black-100 leading-7">
            3. Information Sharing:{" "}
          </Text>
          {"\n"}- Third-Party Service Providers: We may share your information
          with trusted third-party service providers who assist us in operating
          our app, fulfilling orders, and improving our services.{"\n"} - Legal
          Compliance: We may disclose personal information if required by law or
          in response to a valid legal request from authorities.
          {"\n"}
          <Text className="text-black-100 leading-7">4. Data Security:</Text>
          {"\n"}- We implement appropriate security measures to protect your
          information from unauthorized access, alteration, disclosure, or
          destruction. {"\n"}- However, please note that no data transmission
          over the internet or electronic storage is 100% secure. We cannot
          guarantee absolute security of your information. {"\n"}
          <Text className="text-black-100 leading-7">5. User Rights:</Text>
          {"\n"} - Access and Update: You have the right to access, correct, or
          update your personal information stored in our app. {"\n"}- Data
          Retention: We retain your personal information as long as necessary to
          provide our services and comply with legal obligations.
          {"\n"}
          <Text className="text-black-100 leading-7">
            6. Children's Privacy:
          </Text>
          {"\n"}- QuickMart is not intended for children under the age of 13. We
          do not knowingly collect or solicit personal information from
          children.
          {"\n"}
          <Text className="text-black-100 leading-7">
            7. Updates to the Privacy Policy:
          </Text>
          {"\n"}- We reserve the right to update this Privacy Policy from time
          to time. Any changes will be posted on our app, and the revised policy
          will be effective upon posting. If you have any questions or concerns
          about our Privacy Policy, please contact our customer support. By
          using QuickMart, you acknowledge that you have read and understood
          this Privacy Policy and agree to its terms and conditions.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PrivacyPolicy;
