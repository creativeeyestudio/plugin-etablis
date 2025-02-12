/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { BaseHeaderLayout, Box, ContentLayout, Table, Thead, Tbody, Th, Tr, Td, LinkButton, Flex } from '@strapi/design-system';
import axios from 'axios';

const fetchData = async () => {
  try {
    const response = await axios.get('/etablis/etablissement');
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return null;
  }
};

const HomePage = () => {
  const paddingSize = 4;

  const [etablissement, setEtablissement] = useState();

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchData();
      setEtablissement(data);
    };

    loadData();
  }, [])

  return (
    <Box>
      <BaseHeaderLayout 
        title="Etablis" 
        subtitle="Gestion des informations de l'établissement" 
        as="h1"
        primaryAction={
          <Flex gap={4}>
            <LinkButton
              children="Modifier les informations de l'établissement" 
              isExternal={false}
              size="M"></LinkButton>
            <LinkButton 
              children="Gérer les menus et cartes" 
              isExternal={false}
              size="M"
              variant="secondary"></LinkButton>
          </Flex> 
        }/>
      <ContentLayout>
        {etablissement ? <Table footer={undefined}>
          <Tbody>
            <Tr>
              <Td>
                <Box paddingTop={paddingSize} paddingBottom={paddingSize} children={"Nom"}></Box>
              </Td>
              <Td>
                <Box children={etablissement?.nom ?? ""}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={paddingSize} paddingBottom={paddingSize} children={"Type d'établissement"}></Box>
              </Td>
              <Td>
                <Box children={etablissement?.type ?? ""}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={paddingSize} paddingBottom={paddingSize} children={"Adresse"}></Box>
              </Td>
              <Td>
                <Box children={etablissement?.adresse ?? ""}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={paddingSize} paddingBottom={paddingSize} children={"Code postal"}></Box>
              </Td>
              <Td>
                <Box children={etablissement?.code_postal ?? ""}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={paddingSize} paddingBottom={paddingSize} children={"Ville"}></Box>
              </Td>
              <Td>
                <Box children={etablissement?.ville ?? ""}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={paddingSize} paddingBottom={paddingSize} children={"Téléphone"}></Box>
              </Td>
              <Td>
                <Box children={etablissement?.telephone ?? ""}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={paddingSize} paddingBottom={paddingSize} children={"Adresse E-Mail"}></Box>
              </Td>
              <Td>
                <Box children={etablissement?.email ?? ""}></Box>
              </Td>
            </Tr>
          </Tbody>
        </Table> : null}
        
      </ContentLayout>
    </Box>
  );
};

export default HomePage;
