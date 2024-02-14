import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { toast } from "react-toastify";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [contactsList, setContactsList] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const pathname = window.location.pathname;

  const userRegister = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      await api.post("/users", formData);
      toast.success("Cadastro realizado com sucesso");
      reset();
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response?.data.message === "Email already exists.") {
        toast.error("Email já cadastrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData, setLoading, reset) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);

      localStorage.setItem("@tokenMyContacts", data.token);
      setUser(data.user);
      setContactsList(data.user.contacts);

      toast.success("Usuário válido");
      reset();
      navigate("/dashboard");
    } catch (error) {
      if (error.response?.data.message === "Invalid credentials.") {
        toast.error("Email e/ou senha incorretos");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        contactsList,
        setContactsList,
        loading,
        userLogin,
        userRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
