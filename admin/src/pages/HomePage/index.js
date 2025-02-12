/*
 *
 * HomePage
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { BaseHeaderLayout, Box, ContentLayout, Table, Thead, Tbody, Th, Tr, Td, LinkButton, Flex } from '@strapi/design-system';
import Etablissement from '../Etablissement';

const HomePage = () => {
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
        <Table footer={undefined}>
          <Thead>
            <Tr>
              <Th children={"Content"} action={undefined}></Th>
              <Th children={"Value"} action={undefined}></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>
                <Box paddingTop={5} paddingBottom={5}>
                  Nom
                </Box>
              </Td>
              <Td>
                <Box paddingTop={5} paddingBottom={5}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={5} paddingBottom={5}>
                  Type d'établissement
                </Box>
              </Td>
              <Td>
                <Box paddingTop={5} paddingBottom={5}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={5} paddingBottom={5}>
                  Adresse
                </Box>
              </Td>
              <Td>
                <Box paddingTop={5} paddingBottom={5}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={5} paddingBottom={5}>
                  Code postal
                </Box>
              </Td>
              <Td>
                <Box paddingTop={5} paddingBottom={5}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={5} paddingBottom={5}>
                  Ville
                </Box>
              </Td>
              <Td>
                <Box paddingTop={5} paddingBottom={5}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={5} paddingBottom={5}>
                  Téléphone
                </Box>
              </Td>
              <Td>
                <Box paddingTop={5} paddingBottom={5}></Box>
              </Td>
            </Tr>
            <Tr>
              <Td>
                <Box paddingTop={5} paddingBottom={5}>
                  Adresse E-Mail
                </Box>
              </Td>
              <Td>
                <Box paddingTop={5} paddingBottom={5}></Box>
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </ContentLayout>
    </Box>
  );
};

export default HomePage;
