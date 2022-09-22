import React, { useState, useEffect } from "react";
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import { db, storage } from "../../firebase";
import { useNavigate, useParams } from "react-router-dom";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  getDoc,
  serverTimestamp,
  doc,
  updateDoc,
} from "firebase/firestore";
import { toast } from "react-toastify";
import AdminHeader from "./AdminHeader";

const initialState = {
  title: "",
  address: "",
  date: "",
  tags: [],
  //   trending: "no",
  category: "",
  description: "",
};

const categoryOption = ["Tax", "Auditing", "CFO Services", "Business", "Empowerement", "Conferences", "Entrepreneurship"];

const AddEditEvent = ({ user, setActive }) => {
  const [form, setForm] = useState(initialState);
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  const { title, address, date, tags, category, description } = form;

  useEffect(() => {
    const uploadFile = () => {
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setProgress(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            toast.info("Image upload to firebase successfully");
            setForm((prev) => ({ ...prev, imgUrl: downloadUrl }));
          });
        }
      );
    };

    file && uploadFile();
  }, [file]);

  useEffect(() => {
    id && getBlogDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getBlogDetail = async () => {
    const docRef = doc(db, "events", id);
    const snapshot = await getDoc(docRef);
    if (snapshot.exists()) {
      setForm({ ...snapshot.data() });
    }
    setActive(null);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleTags = (tags) => {
    setForm({ ...form, tags });
  };

  //   const handleTrending = (e) => {
  //     setForm({ ...form, trending: e.target.value });
  //   };

  const onCategoryChange = (e) => {
    setForm({ ...form, category: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (category && tags && title && description && date && address) {
      if (!id) {
        try {
          await addDoc(collection(db, "events"), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Event created successfully");
        } catch (err) {
          console.log(err);
        }
      } else {
        try {
          await updateDoc(doc(db, "events", id), {
            ...form,
            timestamp: serverTimestamp(),
            author: user.displayName,
            userId: user.uid,
          });
          toast.success("Event updated successfully");
        } catch (err) {
          console.log(err);
        }
      }
    } else {
      return toast.error("All fields are mandatory to fill");
    }

    navigate("/admin/home");
  };

  return (
    <>
      <AdminHeader />
      <div className="auth__container">
        <h2>{id ? "Update Event" : "Create Event"}</h2>

        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__input">
            <input
              type="text"
              className="form-control input-text-box"
              placeholder="Event Name"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </div>
          <div className="auth__input">
            <input
              type="text"
              className="form-control input-text-box"
              placeholder="Event Location"
              name="address"
              value={address}
              onChange={handleChange}
            />
          </div>
          <div className="auth__input">
            <input
              type="date"
              className="form-control input-text-box"
              placeholder="Event Date"
              name="date"
              value={date}
              onChange={handleChange}
            />
          </div>
          <div className="auth__input">
            <ReactTagInput
              tags={tags}
              placeholder="Tags"
              onChange={handleTags}
            />
          </div>
          {/* <div className="radio__container">
            <p className="trending">Is it a trending insight?</p>
            <div className="radio--child">
              <div>
                <input
                  type="radio"
                  className="form-check-input"
                  value="yes"
                  name="radioOption"
                  checked={trending === "yes"}
                  onChange={handleTrending}
                />
                <label htmlFor="radioOption" className="form-check-label">
                  Yes&nbsp;
                </label>
              </div>
              <div>
                <input
                  type="radio"
                  className="form-check-input"
                  value="no"
                  name="radioOption"
                  checked={trending === "no"}
                  onChange={handleTrending}
                />
                <label htmlFor="radioOption" className="form-check-label">
                  No
                </label>
              </div>
            </div>
          </div> */}
          <div className="auth__input">
            <select
              value={category}
              onChange={onCategoryChange}
              className="catg-dropdown"
            >
              <option>Please select category</option>
              {categoryOption.map((option, index) => (
                <option value={option || ""} key={index}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="auth__input">
            <textarea
              className="form-control description-box"
              placeholder="Description"
              value={description}
              name="description"
              onChange={handleChange}
              cols="30"
              rows="10"
            />
          </div>
          <div className="auth__input upload__insight">
            <p>Upload Cover Photo</p>
            <input
              type="file"
              className="form-control"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
          <div>
            <button
              className="btn-sign-in"
              type="submit"
              disabled={progress !== null && progress < 100}
            >
              {id ? "Update" : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddEditEvent;
