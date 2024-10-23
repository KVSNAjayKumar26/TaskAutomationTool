import React, { useState } from 'react';
import { Container, Grid, Button, Box, Typography } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import ScriptEditor from './ScriptEditor';
import TaskList from './TaskList';

const theme = createTheme({
  palette: {
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    success: { main: '#4caf50' },
  },
});

function App() {
  const [script, setScript] = useState('// write your automation script here');
  
  const executeScript = async () => {
    try {
      const response = await fetch('http://localhost:5000/execute-script', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ script }),
      });
      const result = await response.text();
      alert(`Execution Result: ${result}`);
    } catch (error) {
      console.error('Error executing script:', error);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Typography variant="h4" sx={{ mt: 4, mb: 2 }}>
          Task Automation Tool
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="contained" color="primary" fullWidth>
                Create Task
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="contained" color="secondary" fullWidth>
                View Tasks
              </Button>
            </motion.div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Button variant="contained" color="success" fullWidth onClick={executeScript}>
                Run Script
              </Button>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4 }}>
          <TaskList />
        </Box>

        <Box sx={{ mt: 4 }}>
          <ScriptEditor script={script} setScript={setScript} />
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
