import React, { useState, useEffect } from "react";
import axios from "axios";
import { BaseHeaderLayout, Box, Button, TextInput, SingleSelect, SingleSelectOption, ContentLayout, Textarea } from "@strapi/design-system";
import { useNotification, useLibrary } from "@strapi/helper-plugin";

const UpdateEtablissement = () => {
  const margin = 6;
  const [etablissement, setEtablissement] = useState({
    nom: "",
    type: "Hôtel",
    adresse: "",
    code_postal: "",
    ville: "",
    telephone: "",
    email: "",
    logo: null,
  });

  const notify = useNotification();
  const { components } = useLibrary(); // Accès à la bibliothèque de médias

  useEffect(() => {
    const fetchEtablissement = async () => {
      try {
        const response = await axios.get("/etablis/etablissement");
        setEtablissement(response.data || {});
      } catch (error) {
        console.error("Erreur lors du chargement :", error);
        notify({ type: "warning", message: "Impossible de charger les informations." });
      }
    };
    fetchEtablissement();
    
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEtablissement((prev) => ({
      ...prev,
      [name]: value, // Met à jour le nom de l'etablissement
    }));
  };


  const handleSave = async () => {
    console.log(etablissement ?? "Not found");
    
    try {
      await axios.put("/etablis/etablissement", etablissement);
      notify({ type: "success", message: "Informations mises à jour !" });
      console.log("Updated");
    } catch (error) {
      console.error("Erreur lors de la sauvegarde :", error);
      notify({ type: "warning", message: "Échec de la mise à jour." });
    }
  };

  const handleFileChange = (files) => {
    setEtablissement({ ...etablissement, logo: files[0] });
  };

  return (
    <Box>
      <BaseHeaderLayout
        title="Modifier les infos de l'établissement" 
        as="h1" />
      <ContentLayout>
        <Box marginBottom={margin}>
          <TextInput name="nom" label="Nom" size="M" type="text" value={etablissement.nom || ''} onChange={handleChange}></TextInput>
        </Box>
        <Box marginBottom={margin}>
          <SingleSelect name="type" label="Type d'établissement" value={etablissement.type || ''}>
            <SingleSelectOption value="Hôtel">Hôtel</SingleSelectOption>
            <SingleSelectOption value="Restaurant">Restaurant</SingleSelectOption>
            <SingleSelectOption value="Hôtel-Restaurant">Hôtel-Restaurant</SingleSelectOption>
            <SingleSelectOption value="SPA">SPA</SingleSelectOption>
          </SingleSelect>
        </Box>
        <Box marginBottom={margin}>
          <Textarea name="adresse" label="Adresse postale" value={etablissement.adresse || ''} onChange={handleChange}></Textarea>
        </Box>
        <Box marginBottom={margin}>
          <TextInput name="code_postal" label="Code Postal" size="M" type="text" value={etablissement.code_postal || ''} onChange={handleChange}></TextInput>
        </Box>
        <Box marginBottom={margin}>
          <TextInput name="ville" label="Ville" size="M" type="text" value={etablissement.ville || ''} onChange={handleChange}></TextInput>
        </Box>
        <Box marginBottom={margin}>
          <TextInput name="telephone" label="Téléphone" size="M" type="tel" value={etablissement.telephone || ''} onChange={handleChange}></TextInput>
        </Box>
        <Box marginBottom={margin}>
          <TextInput name="email" label="E-Mail" size="M" type="email" value={etablissement.email || ''} onChange={handleChange}></TextInput>
        </Box>
        <Box marginBottom={margin}>
          <Button onClick={handleSave}>Mettre à jour</Button>
        </Box>
      </ContentLayout>
    </Box>
  );
};

export default UpdateEtablissement;
