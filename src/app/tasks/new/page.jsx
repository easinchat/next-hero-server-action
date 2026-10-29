import { newTaskAction } from "@/lib/actions";
import {
  Button,
  Input,
  Label,
  ListBox,
  TextField,
  Surface,
  Select,
  Form,
} from "@heroui/react";
import React from "react";

const NewTask = () => {
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-5xl">Add a New Task</h2>
      <Form action={newTaskAction} className="flex flex-col gap-4">
        <TextField
          isRequired
          className="w-full"
          name="title"
          type="text"
          variant="secondary"
        >
          <Label>Title</Label>
          <Input placeholder="Enter your Task Title" />
        </TextField>
        <TextField
          className="w-full"
          name="description"
          type="description"
          variant="secondary"
        >
          <Label>Task Description</Label>
          <Input placeholder="Enter your description" />
        </TextField>
        <Select name="priority" className="w-[256px]" placeholder="Select one">
          <Label>Priority</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="low" textValue="Low">
                Low
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="Medium">
                Medium
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="high" textValue="High">
                High
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>
        <Select name="status" className="w-[256px]" placeholder="status">
          <Label>Status</Label>
          <Select.Trigger>
            <Select.Value />
            <Select.Indicator />
          </Select.Trigger>
          <Select.Popover>
            <ListBox>
              <ListBox.Item id="progress" textValue="Progress">
                Pending
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="medium" textValue="Medium">
                Progress
                <ListBox.ItemIndicator />
              </ListBox.Item>
              <ListBox.Item id="completed" textValue="Completed">
                Completed
                <ListBox.ItemIndicator />
              </ListBox.Item>
            </ListBox>
          </Select.Popover>
        </Select>

        <TextField className="w-full" name="assignedTo" variant="secondary">
          <Label>Assigned To</Label>
          <Input placeholder="Task Assigned To" />
        </TextField>

        <Button slot="close" variant="secondary">
          Cancel
        </Button>
        <Button slot="close" type="submit">
          Submit Tasks
        </Button>
      </Form>
    </div>
  );
};

export default NewTask;
