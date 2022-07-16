import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Layout from '../../components/layout/Layout'
import Container from '../../components/Projects/Container'
import ProjectFilters from '../../components/Projects/ProjectFilters'
import styles from '../../components/Projects/styles.module.css'

const Projects = () => {

    return <Layout>
        <div className={styles.Projects}>
            <Container/>
        </div>
        <ProjectFilters/>
        <div className="firstLayer"></div>
    </Layout>
}

export default Projects