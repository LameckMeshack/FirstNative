import { useState } from "react";
import { Text, SafeAreaView, FlatList } from "react-native";
import { FocusedStatusBar } from "../components";

import { COLORS, NFTData } from "../constants";
function Home() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
    </SafeAreaView>
  );
}

export default Home;
