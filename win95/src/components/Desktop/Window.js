import React from "react";
import { Modal, List, TextArea } from "@react95/core";
import "./Desktop.css";

class Window extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Modal
          width={700}
          height={500}
          icon="notepad"
          title="Notepad"
          closeModal={() => {
            this.props.openNotepad();
          }}
          menu={[
            {
              name: "File",
              list: (
                <List>
                  <List.Item onClick={() => {}}>Exit</List.Item>
                </List>
              )
            },
            {
              name: "Edit",
              list: (
                <List>
                  <List.Item>Copy</List.Item>
                </List>
              )
            }
          ]}
        >
          <TextArea rows={100} cols={50}>
            Michael VanSleen: Versatile creative experienced in web development,
            graphic design and digital marketing and communications.
          </TextArea>
        </Modal>

        {this.props.children}
      </div>
    );
  }
}

export default Window;
