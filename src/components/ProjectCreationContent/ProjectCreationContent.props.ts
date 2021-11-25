export interface ProjectCreationContentProps {
    /** Action to trigger when submitting project creation informations */
    onSubmitAction: (variables: any) => void

    /** Is project creation loading, used to display loading indicator */
    isLoading: boolean
}
