import { createContext, useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { toast } from "react-toastify";

export const ContactContext = createContext({});

export const ContactProvider = ({ children }) => {
  const [hiddenCreateContact, setHiddenCreateContact] = useState(true);
  const [hiddenUpdateContact, setHiddenUpdateContact] = useState(true);
  const [editingContact, setEditingContact] = useState(null);

  const { contactsList, setContactsList } = useContext(UserContext);

  const contactRegister = async (formData, setLoading, reset) => {
    const token = localStorage.getItem("@tokenKenzieHub");

    try {
      setLoading(true);
      const { data } = await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newContactList = { ...contactsList, data };
      setContactsList(newContactList);

      reset();
      toast.success("Contato cadastrado");
      setHiddenCreateContact(true);
    } catch (error) {
      console.log(error);
      if (
        error.response?.data.message === "There is contact with this email."
      ) {
        toast.error("Email de contato já existente");
      }
    } finally {
      setLoading(false);
    }
  };

  const contactUpdate = async (formData, setLoading, id) => {
    const token = localStorage.getItem("@tokenKenzieHub");

    try {
      setLoading(true);
      const { data } = await api.patch(`/contacts/${id}`, formData, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newContactList = contactsList.map((contact) =>
        contact.id === id ? (contact = data) : contact
      );
      setContactsList(newContactList);

      setEditingContact(null);
      toast.success("Contato atualizado");
      setHiddenUpdateContact(true);
    } catch (error) {
      console.log(error);
      if (
        error.response?.data.message === "There is contact with this email."
      ) {
        toast.error("Email de contato já existente");
      } else if (
        error.response?.data.message === "User does not have this contact"
      ) {
        toast.error("Contato não encontrado");
      }
    } finally {
      setLoading(false);
    }
  };

  const contactDelete = async (id) => {
    const token = localStorage.getItem("@tokenMyContacts");

    try {
      await api.delete(`/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const newContactList = contactsList.filter((contact) => contact.id != id);
      setContactsList(newContactList);

      toast.success("Contato deletado");
    } catch (error) {
      if (error.response?.data.message === "User does not have this contact") {
        toast.error("Contato não encontrado");
      }
    }
  };

  return (
    <ContactContext.Provider
      value={{
        hiddenCreateContact,
        setHiddenCreateContact,
        hiddenUpdateContact,
        setHiddenUpdateContact,
        editingContact,
        setEditingContact,
        contactsList,
        setContactsList,
        contactRegister,
        contactUpdate,
        contactDelete,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};
