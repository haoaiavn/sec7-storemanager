import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useImperativeHandle, useState } from "react";

import GlobalButton from "../../components/global/Button.js";

const OPTIONS = [
  { key: "All", value: "All Orders" },
  { key: "Completed", value: "Completed" },
  { key: "Pending", value: "Pending Payment" },
  { key: "Processing", value: "Processing" },
  { key: "On Hold", value: "On Hold" },
  { key: "Cancelled", value: "Cancelled" },
  { key: "Refunded", value: "Refunded" },
];

const OptionList = ({ optionList, selected, setSelected }) => {
  return optionList.map((element) =>
    element.key == selected.key ? (
      <Pressable style={[styles.option, styles.selected]} key={element.key}>
        <Text style={[styles.titleOption, styles.titleSelected]}>
          {element.value}
        </Text>
        <Text style={[styles.titleOption, styles.titleSelected]}>✓</Text>
      </Pressable>
    ) : (
      <Pressable
        style={styles.option}
        key={element.key}
        onPress={() => {
          setSelected(element);
        }}
      >
        <Text style={styles.titleOption}>{element.value}</Text>
      </Pressable>
    )
  );
};

const OrderFilter = ({ currentOption, handleOption, visible, setVisible }) => {
  const [selected, setSelected] = useState(currentOption);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setVisible(!visible);
        }}
      >
        <View style={styles.spaceView}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <OptionList
                style={styles.optionListStyle}
                optionList={OPTIONS}
                selected={selected}
                setSelected={setSelected}
              />
              <GlobalButton
                style={styles.applyButton}
                title="Apply"
                onPress={() => {
                  handleOption(selected);
                  setVisible(false);
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    flexDirection: "column-reverse",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  spaceView: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "white",
    borderTopRightRadius: 38,
    borderTopLeftRadius: 38,
    padding: 20,
    alignItems: "stretch",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  optionListStyle: {
    justifyContent: "center",
    alignItems: "stretch",
    width: "100%",
  },
  option: {
    marginHorizontal: 10,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "gray",
    justifyContent: "space-between",
  },
  selected: {
    flexDirection: "row",
  },
  titleSelected: {
    color: "blue",
  },
  titleOption: {
    fontSize: 16,
    color: "black",
  },
  applyButton: {
    width: 320,
    backgroundColor: "#24a0ed",
  },
});

export default OrderFilter;
